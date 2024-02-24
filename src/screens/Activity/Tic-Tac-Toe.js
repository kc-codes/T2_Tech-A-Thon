import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  SafeAreaView,
} from 'react-native';

const screen = Dimensions.get('window');

const SQUARE_SIZE = Math.floor(screen.width * 0.3);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3ba2bf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    borderWidth: 1,
    borderColor: '#fff',
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: SQUARE_SIZE,
    height: SQUARE_SIZE,
  },
  squareText: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },
  winnerBlock: {
    marginTop: 50,
  },
  button: {
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const Square = ({ onPress, value }) => (
  <TouchableOpacity style={styles.square} onPress={onPress}>
    <Text style={styles.squareText}>{value}</Text>
  </TouchableOpacity>
);

const Board = ({ onSquarePress, squares }) => {
  const renderSquare = i => {
    return <Square value={squares[i]} onPress={() => onSquarePress(i)} />;
  };

  return (
    <View style={styles.board}>
      <View style={styles.row}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </View>
      <View style={styles.row}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </View>
      <View style={styles.row}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </View>
    </View>
  );
};

const App = () => {
  const [xIsNext, setXIsNext] = useState(true); // Change initial player to human
  const [squares, setSquares] = useState(Array(9).fill(null));

  const onSquarePress = i => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const newSquares = [...squares];
    newSquares[i] = 'X'; // Assume human is always 'X'

    // Check for winner
    const winner = calculateWinner(newSquares);
    if (winner) {
      setSquares(newSquares);
      return;
    }

    // Bot's turn
    const botMove = getBotMove(newSquares);
    newSquares[botMove] = 'O'; // Bot is always 'O'

    setXIsNext(true); // Switch back to human player
    setSquares(newSquares);
  };

  const getBotMove = squares => {
    // Implement minimax algorithm here to determine bot's move
    // This is a simplified version, you may need to optimize and expand it
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        return i; // Return the first available square
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Board squares={squares} onSquarePress={onSquarePress} />

      {calculateWinner(squares) && (
        <View style={styles.winnerBlock}>
          <Text style={styles.text}>{`Winner: ${calculateWinner(squares)}`}</Text>
          <TouchableOpacity
            onPress={() => setSquares(Array(9).fill(null))}
            style={styles.button}>
            <Text style={styles.buttonText}>New Game</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default App;
