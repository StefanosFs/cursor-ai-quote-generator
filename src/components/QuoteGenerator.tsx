import React, { useState } from 'react';
import './QuoteGenerator.css';

interface Quote {
    text: string;
    rating: number;
}

interface QuoteGeneratorProps {
    onNewQuote: () => void;
}

const initialQuotes: Quote[] = [
    { text: "The only way to do great work is to love what you do. - Steve Jobs", rating: 0 },
    { text: "Innovation distinguishes between a leader and a follower. - Steve Jobs", rating: 0 },
    { text: "Stay hungry, stay foolish. - Steve Jobs", rating: 0 },
    { text: "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt", rating: 0 },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill", rating: 0 },
    { text: "Be the change you wish to see in the world. - Mahatma Gandhi", rating: 0 },
    { text: "Everything you've ever wanted is on the other side of fear. - George Addair", rating: 0 },
    { text: "The only impossible journey is the one you never begin. - Tony Robbins", rating: 0 },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb", rating: 0 },
    { text: "Life is what happens when you're busy making other plans. - John Lennon", rating: 0 }
];

const QuoteGenerator: React.FC<QuoteGeneratorProps> = ({ onNewQuote }) => {
    const [quotes, setQuotes] = useState<Quote[]>(initialQuotes);
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    const generateNewQuote = () => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * quotes.length);
        } while (newIndex === currentQuoteIndex);
        setCurrentQuoteIndex(newIndex);
        onNewQuote();
    };

    const handleRating = (rating: number) => {
        const updatedQuotes = [...quotes];
        updatedQuotes[currentQuoteIndex].rating = rating;
        setQuotes(updatedQuotes);
    };

    const StarRating = () => {
        return (
            <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={`star ${star <= quotes[currentQuoteIndex].rating ? 'filled' : ''}`}
                        onClick={() => handleRating(star)}
                    >
                        ★
                    </span>
                ))}
            </div>
        );
    };

    return (
        <div className="quote-container">
            <div className="quote-box">
                <p className="quote-text">{quotes[currentQuoteIndex].text}</p>
                <StarRating />
                <button className="quote-button" onClick={generateNewQuote}>
                    New Quote
                </button>
            </div>
        </div>
    );
};

export default QuoteGenerator; 