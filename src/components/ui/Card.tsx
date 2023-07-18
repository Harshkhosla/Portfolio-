import Image from 'next/image';
import { FC } from 'react';
import List from './List';
import { Code, History } from 'lucide-react';

interface CardProps {
    title: string;
    snippetCount: number;
    exp: string;
    src: string;
    progress: number;
    link?: string; // Make the link prop optional by adding '?' to it
}

const Card: FC<CardProps> = ({ title, snippetCount, exp, src, progress, link }) => {
    return (
        <div className="flex flex-col gap-3">
            <div className="relative aspect-video">
            {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <Image
                            src={src}
                            alt={title}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </a>
                ) : (
                    <Image
                        src={src}
                        alt={title}
                        fill
                        className="object-cover rounded-lg"
                    />
                )}
                <div className="progress-bar">
                    <div
                        className="h-full bg-btnHighlight"
                        style={{
                            borderRadius: '0 0 0 8px',
                            width: `${progress}%`,
                        }}
                    />
                </div>
            </div>

            <div className="grid gap-2 px-2">
                <div className="text-highlight font-bold">{title}</div>
                <div className="flex gap-2 md:gap-10">
                    <List variant="info" link={link} sizes="xs">
                        <Code size={16} />
                        {snippetCount.toLocaleString()}
                    </List>
                    <List variant="info"  sizes="xs">
                        <History size={16} />
                        {exp}
                    </List>
                </div>
            </div>
        </div>
    );
};

export default Card;
