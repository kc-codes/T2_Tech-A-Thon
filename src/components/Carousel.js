import React, { useState, useEffect, useRef, useMemo } from 'react';
import { StyleSheet, View, Dimensions, FlatList, Pressable } from 'react-native';
import { colorTheme } from '../constant';
import DoctorCard from './DoctorCard';

const DOT_SIZE = 8;
const { width } = Dimensions.get('window');

export default function Carousel({ data, autoPlay = false, children: Children, childrenStyle }) {
  const [indexDot, setIndexDot] = useState(0);
  const flatListRef = useRef(null);

  const onChangeDot = (event) => {
    setIndexDot(Math.ceil(event.nativeEvent.contentOffset.x / width));
  };

  useEffect(() => {
    let interval;

    if (autoPlay) {
      interval = setInterval(() => {
        setIndexDot((prevIndex) => (prevIndex + 1) % data.length);
        flatListRef.current?.scrollToIndex({
          index: (indexDot + 1) % data.length,
          animated: true,
        });
      }, 3000); // Adjust the interval (in milliseconds) based on your preference
    }

    return () => clearInterval(interval);
  }, [autoPlay, data.length, indexDot]);

  const renderPagination = useMemo(() => {
    return (
      <View style={styles.wrapPagination}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  indexDot === index ? colorTheme.primaryColor : 'rgba(0, 0, 0, 0.3)',
              },
            ]}
          />
        ))}
      </View>
    );
  }, [data?.length, indexDot]);

  const renderItem = ({ item }) => (
    <Pressable style={styles.wrapItem}>
      <View style={{ ...styles.item, width: '100%' }}>{Children && React.cloneElement(Children, { item: item })}</View>
    </Pressable>
  );

  return (
    <>
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        disableIntervalMomentum
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        scrollEventThrottle={200}
        onMomentumScrollEnd={onChangeDot}
        keyExtractor={(item, index) => `carousel_${index}`}
        initialScrollIndex={indexDot}
      />
      {renderPagination}
    </>
  );
}

const styles = StyleSheet.create({
  wrapPagination: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: DOT_SIZE,
    width: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    marginHorizontal: 3,
  },
  wrapItem: {
    width: width,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:"red"
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
  },
});
