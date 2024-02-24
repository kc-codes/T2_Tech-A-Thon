import React, { useState, useEffect } from 'react';
import {
    View, Text, TextInput,
    TouchableOpacity, StyleSheet, Alert
} from 'react-native';
import { sampleWords } from '../../assets/data/WordGuessData'


const getRandomWord = () => {
    const randomPlace =
        Math.floor(Math.random() * sampleWords.length);
    return sampleWords[randomPlace];
};

const GFGWordGame = () => {
    const [wordData, setWordData] =
        useState(getRandomWord());
    const [msg, setMsg] = useState('');
    const [inputText, setInputText] = useState('');
    const [hints, setHints] = useState(3);
    const [displayWord, setDisplayWord] =
        useState(false);

    const checkWordGuessedFunction = () => {
        return inputText.toLowerCase() ===
            wordData.word.toLowerCase();
    };

    const useHint = () => {
        if (hints > 0 && !displayWord) {
            const hiddenLetterIndex = wordData.word
                .split('')
                .findIndex(
                    (letter) =>
                        letter !== ' ' &&
                        inputText[hiddenLetterIndex] !==
                        letter);
            const updatedText =
                inputText.slice(0, hiddenLetterIndex) +
                wordData.word[hiddenLetterIndex] +
                inputText.slice(hiddenLetterIndex + 1);
            setHints(hints - 1);
            setInputText(updatedText);
        }
    };

    const showResult = () => {
        if (checkWordGuessedFunction()) {
            setMsg(`Congratulations! You guessed 
			the word correctly!`);
        } else {
            setMsg('You made a Wrong Guess. Try again!');
            setDisplayWord(true);
        }
    };

    const restartGameFunction = () => {
        setWordData(getRandomWord());
        setMsg('');
        setInputText('');
        setHints(3);
        setDisplayWord(false);
    };

    useEffect(() => {
        if (displayWord) {
            showResult();
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                Word Guess Game
            </Text>
            <Text style={styles.wordDescription}>
                Hint: {wordData.description}
            </Text>
            <View style={styles.hints}>
                <Text style={styles.hintText}>
                    Hints Remaining: {hints}
                </Text>
            </View>
            <TextInput
                style={styles.input}
                value={inputText}
                onChangeText={(text) => setInputText(text)}
                placeholder="Enter your guess"
                editable={!displayWord}
            />
            <View style={styles.buttonSection}>
                <TouchableOpacity onPress={useHint}
                    disabled={hints === 0 || displayWord}
                    style={styles.hintButton}>
                    <Text style={styles.hintButtonText}>Use Hint</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={showResult}
                    style={styles.showResultButton}
                    disabled={displayWord}>
                    <Text style={styles.buttonText}>
                        Show Result
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={restartGameFunction}
                    style={styles.restartButton}>
                    <Text style={styles.buttonText}>
                        Restart
                    </Text>
                </TouchableOpacity>
            </View>
            {msg && (
                <View style={styles.message}>
                    <Text style={styles.messageText}>
                        {msg}
                    </Text>
                    {displayWord &&
                        <Text>
                            Correct word was: {wordData.word}
                        </Text>}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        padding: 16,
    },
    appName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'green',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    wordDescription: {
        marginTop: 16,
        marginBottom: 16,
    },
    hints: {
        marginTop: 16,
        marginBottom: 16,
    },
    hintText: {
        fontSize: 16,
    },
    hintButton: {
        padding: 10,
        backgroundColor: 'orange',
        borderRadius: 5,
    },
    hintButtonText: {
        color: 'white',
    },
    showResultButton: {
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 5,
        marginRight: 10,
        marginLeft: 10,
    },
    restartButton: {
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
    },
    message: {
        marginTop: 16,
        alignItems: 'center',
    },
    messageText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 16,
        paddingLeft: 8,
    },
    buttonSection: {
        flexDirection: 'row',
        marginTop: 16,
    },
});

export default GFGWordGame;
