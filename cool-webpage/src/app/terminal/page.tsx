'use client';
import { useState, useEffect, useRef, KeyboardEvent } from "react";
import PixelBack from "../pixelBackground/pixelBackground";
import { useRouter } from "next/navigation";

import MiniTerm from "./miniTerminal";

export default function Terminal() {
    const date: Date = new Date()
    const router = useRouter()
    const [showAnimation, setShowAnimation] = useState(true);
    const [gatillo, setGatillo] = useState(false);

    const [terminalContent, setTerminalContent] = useState<string[]>([
        `Last login: ${date} on ttys000`,
        "Welcome to Jorge's Terminal",
        "Type 'help' to see available commands",
        "guest@guest-Jorges-CoolWebPage:~$ "
    ]);

    const [input, setInput] = useState("");
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [output, setOutput] = useState<string[]>([`Last login: ${date} on ttys000`, "Welcome to Jorge's Terminal", "Type 'help' to see available commands"]);
    const promptText: string = "guest@guest-Jorges-CoolWebPage:~$ ";

    const terminalRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setTimeout(() => {
            setGatillo(!gatillo);
            setTimeout(() => {
                setShowAnimation(false);
            }, 1000);
        }, 500);
    }, []);

    const commands: Record<string, { description: string, action: () => void }> = {
        help: {
            description: "Display available commands",
            action: () => {
                const lines: string[] = [
                    "Available commands:",
                    "  help       - Display available commands",
                    "  clear      - Clear terminal output",
                    "  whois      - Who is Jorge?",
                    "  videos     - Visit YouTube channel",
                    "  projects   - Visit GitHub",
                    "  social     - Display social networks",
                    "  secret     - Password required",
                    "  exit       - Exit"
                ]
                setOutput(prev => [...prev, ...lines]);
                setTerminalContent(prev => [...prev, ...lines])
            }
        },
        clear: {
            description: "Clear terminal output",
            action: () => {
                setOutput([]);
                setTerminalContent([promptText]);
            }
        },
        whois: {
            description: "Who is Jorge?",
            action: () => {
                const whoLines: string[] = [
                    "Jorge Chavira - Software Developer",
                    "-----------------------------------",
                    "A passionate developer focused on creating interactive web experiences.",
                    "Skills include React, Next.js, and creative front-end development."]
                setOutput(prev => [...prev, ...whoLines]);
                setTerminalContent(prev => [...prev, ...whoLines]);
            }
        },
        videos: {
            description: "Visit YouTube channel",
            action: () => {
                setOutput(prev => [...prev, "Opening YouTube channel..."]);
                setTerminalContent(prev => [...prev, "Opening YouTube channel..."]);
                window.open("https://youtube.com/@jorge_u.?si=YPu61fGhdszhBLhb", "_blank");
            }
        },
        projects: {
            description: "Visit GitHub",
            action: () => {
                setOutput(prev => [...prev, "Opening GitHub profile..."]);
                setTerminalContent(prev => [...prev, "Opening GitHub profile..."]);
                window.open("https://github.com/Deghim", "_blank");
            }
        },
        social: {
            description: "Display social networks",
            action: () => {
                const networks: string[] = [
                    "Social Networks:",
                    "  • LinkedIn: https://tinyurl.com/jorgeLinkIn",
                    "  • TikTok: https://tinyurl.com/jorgeTikTok",
                    "  • Instagram: https://tinyurl.com/jorgeInsta"
                ]
                setOutput(prev => [
                    ...prev,
                    ...networks
                ]);
                setTerminalContent(prev => [
                    ...prev,
                    ...networks
                ]);
            }
        },
        secret: {
            description: "Password required",
            action: () => {
                setOutput(prev => [...prev, "Lol. I'm working on that..."]);
                // const password = prompt("Enter password:");
                // if (password === "opensesame") {
                //     setOutput(prev => [...prev, "Access granted. Secret content unlocked!"]);
                //     setTerminalContent(prev => [...prev, "Access granted. Secret content unlocked!"]);
                //     // Add your secret content action here
                // } else {
                //     setOutput(prev => [...prev, "Access denied. Incorrect password."]);
                //     setTerminalContent(prev => [...prev, "Access denied. Incorrect password."]);
                // }
            }
        },
        exit: {
            description: "Exit",
            action: () => {
                setOutput(prev => [...prev, "Exiting terminal. Redirecting to homepage..."]);
                setTerminalContent(prev => [...prev, "Exiting terminal. Redirecting to homepage..."]);
                setTimeout(() => {
                    router.push("/")
                }, 1000)

            }
        }
    };


    useEffect(() => {
        inputRef.current?.focus();
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [output]);

    const executeCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim();

        if (trimmedCmd === "") return;

        setCommandHistory(prev => [...prev, trimmedCmd]);
        setHistoryIndex(-1);

        setOutput(prev => [...prev, `${promptText}${trimmedCmd}`]);
        setTerminalContent(prev => [...prev, `${promptText}${trimmedCmd}`]);

        const [command] = trimmedCmd.split(" ");

        if (commands[command]) {
            commands[command].action();
        } else {
            setOutput(prev => [...prev, `Command not found: ${command}. Type 'help' for available commands.`]);
            setTerminalContent(prev => [...prev, `Command not found: ${command}. Type 'help' for available commands.`]);
        }

        setInput("");
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            executeCommand(input);
            // setAllhistory(prev => [...prev, input])
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (commandHistory.length > 0) {
                const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
                setHistoryIndex(newIndex);
                setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setInput("");
            }
        } else if (e.key === "Tab") {
            e.preventDefault();

            const currentInput = input.trim();
            if (currentInput !== "") {
                const suggestions = Object.keys(commands).filter(cmd => cmd.startsWith(currentInput));

                if (suggestions.length === 1) {
                    setInput(suggestions[0] + " ");
                } else if (suggestions.length > 1) {
                    setOutput(prev => [...prev, `${promptText}${currentInput}`, ...suggestions]);
                    setTerminalContent(prev => [...prev, `${promptText}${currentInput}`, ...suggestions]);
                }
            }
        }
    };

    const terminalStyle = {
        fontFamily: "'JetBrains Mono', monospace",
        overflow: "auto",
        display: "flex",
        flexDirection: "column" as const
    };

    const outputContainerStyle = {
        flexGrow: 1,
        overflowY: "auto" as const,
    };

    const inputContainerStyle = {
        display: "flex",
        flexDirection: "row" as const,
        alignItems: "center"
    };

    const promptStyle = {
        marginRight: "10px",
        whiteSpace: "nowrap" as const
    };

    const inputStyle = {
        border: "none",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "inherit",
        outline: "none",
        width: "100%"
    };

    return (
        <>
            {showAnimation && (
                <div className="fixed inset-0 z-10">
                    <PixelBack gatillo={!gatillo} />
                </div>
            )}
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '16px',
            }}>
                <div style={{
                    ...terminalStyle,
                    flex: '1 1 auto',
                    overflow: 'hidden',
                }} ref={terminalRef}>
                    <div style={outputContainerStyle}>
                        {output.map((line, index) => (
                            <div key={index} >
                                {line}
                            </div>
                        ))}
                    </div>
                    <div style={inputContainerStyle}>
                        <span style={promptStyle}>{promptText}</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            style={inputStyle}
                            autoFocus
                            spellCheck="false"
                            autoComplete="off"
                            autoCapitalize="off"
                        />
                    </div>
                </div>
                <div style={{
                    flex: '0 0 150px',
                    position: 'sticky',
                    top: '20px',
                    alignSelf: 'start',
                    overflowY: 'auto',
                    zIndex: 1,
                }}>
                    <MiniTerm content={terminalContent} />
                </div>
            </div>
        </>
    );
}