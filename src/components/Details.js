import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {getData} from '../../store/action/index';

export default function Details({navigation}) {
  let dispatch = useDispatch();
  const data = useSelector(state => state.counter, shallowEqual);
  useEffect(() => {
    dispatch(getData());
  }, []);
  console.log(data);
  if (data.loading) {
    return (
      <View style={style.container}>
        <Text style={style.paragraph}>LOADING......</Text>
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      <View style={style.text}>
        <Text>{data[0].title}</Text>
        <View style={{alignItems: 'center', paddingTop: 15}}>
          <Image
            style={style.img}
            source={{
              uri: data[0].url,
            }}
          />
        </View>
      </View>
      <View style={style.container}>
        <Text style={style.paragraph}>Details screen</Text>
        <View style={{alignItems: 'center', paddingTop: 10}}>
          <Button title="Next" onPress={() => navigation.navigate('User')} />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  paragraph: {
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    paddingTop: 30,
  },
  img: {
    height: 100,
    width: 100,
  },
});
