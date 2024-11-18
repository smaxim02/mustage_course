import game from '../img/hero/game.webp';
import bar from '../img/hero/bar.webp';
import laptop from '../img/hero/laptop.webp';

import detect from '../img/instruments/detect.webp';
import fb from '../img/instruments/fb.webp';
import instrument from '../img/instruments/instrument.webp';
import keitaro from '../img/instruments/keitaro.webp';
import proxy from '../img/instruments/proxy.webp';
import spy from '../img/instruments/spy.webp';

import books from '../img/advantages/books.webp';
import chat from '../img/advantages/chat.webp';
import friends from '../img/advantages/friends.webp';
import live from '../img/advantages/live.webp';
import note from '../img/advantages/note.webp';
import time from '../img/advantages/time.webp';

export const heroItems = [
  {
    text: 'Hero.blockText.first',
    img: game,
  },
  {
    text: 'Hero.blockText.second',
    img: bar,
  },
  {
    text: 'Hero.blockText.third',
    img: laptop,
  },
];

export const instrumentsItems = [
  {
    text: {
      first: 'Instruments.text.detect.first',
      second: 'Instruments.text.detect.second',
      third: 'Instruments.text.detect.third',
      fourth: 'Instruments.text.detect.fourth',
      fifth: 'Instruments.text.detect.fifth',
      sixth: 'Instruments.text.detect.sixth',
    },
    img: detect,
  },
  {
    text: {
      first: 'Instruments.text.instrument.first',
      second: 'Instruments.text.instrument.second',
      third: 'Instruments.text.instrument.third',
      fourth: 'Instruments.text.instrument.fourth',
      fifth: 'Instruments.text.instrument.fifth',
      sixth: 'Instruments.text.instrument.sixth',
    },
    img: instrument,
  },
  {
    text: {
      first: 'Instruments.text.proxy.first',
      second: 'Instruments.text.proxy.second',
      third: 'Instruments.text.proxy.third',
      fourth: 'Instruments.text.proxy.fourth',
      fifth: 'Instruments.text.proxy.fifth',
      sixth: 'Instruments.text.proxy.sixth',
    },
    img: proxy,
  },
  {
    text: {
      first: 'Instruments.text.keitaro.first',
      second: 'Instruments.text.keitaro.second',
      third: 'Instruments.text.keitaro.third',
      fourth: 'Instruments.text.keitaro.fourth',
      fifth: 'Instruments.text.keitaro.fifth',
      sixth: 'Instruments.text.keitaro.sixth',
    },
    img: keitaro,
  },
  {
    text: {
      first: 'Instruments.text.spy.first',
      second: 'Instruments.text.spy.second',
      third: 'Instruments.text.spy.third',
      fourth: 'Instruments.text.spy.fourth',
      fifth: 'Instruments.text.spy.fifth',
      sixth: 'Instruments.text.spy.sixth',
    },
    img: spy,
  },
  {
    text: {
      first: 'Instruments.text.fb.first',
      second: 'Instruments.text.fb.second',
      third: 'Instruments.text.fb.third',
      fourth: 'Instruments.text.fb.fourth',
      fifth: 'Instruments.text.fb.fifth',
      sixth: 'Instruments.text.fb.sixth',
    },
    img: fb,
  },
];

export const workingItems = [
  {
    text: 'Working.blockText.first',
    numb: '1.',
  },
  {
    text: 'Working.blockText.second',
    numb: '2.',
  },
  {
    text: 'Working.blockText.third',
    numb: '3.',
  },
  {
    text: 'Working.blockText.fourth',
    numb: '4.',
  },
  {
    text: 'Working.blockText.fifth',
    numb: '5.',
  },
  {
    text: 'Working.blockText.sixth',
    numb: '6.',
  },
];

export const mustHaveItems = [
  'MustHave.blockText.first',
  'MustHave.blockText.second',
  'MustHave.blockText.third',
  'MustHave.blockText.fourth',
  'MustHave.blockText.fifth',
  'MustHave.blockText.sixth',
];

export const advantagesItems = [
  {
    text: 'Advantages.blockText.first',
    header: 'Advantages.blockHeader.first',
    logo: books,
  },
  {
    text: 'Advantages.blockText.second',
    header: 'Advantages.blockHeader.second',
    logo: chat,
  },
  {
    text: 'Advantages.blockText.third',
    header: 'Advantages.blockHeader.third',
    logo: note,
  },
  {
    text: 'Advantages.blockText.fourth',
    header: 'Advantages.blockHeader.fourth',
    logo: time,
  },
  {
    text: 'Advantages.blockText.fifth',
    header: 'Advantages.blockHeader.fifth',
    logo: live,
  },
  {
    text: 'Advantages.blockText.sixth',
    header: 'Advantages.blockHeader.sixth',
    logo: friends,
  },
];
