import React, { useReducer, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import Loading from '../Loading';
import { SET_TIME } from '../actions';
import { reducer } from '../reducer';

import variables from '../variables.module.scss';
import './HexTime.scss';

const initialState = {
  hours: null,
  minutes: null,
  seconds: null,
  textColor: null,
};

const Head = ({ title }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="robots" content="noindex" />
    <meta name="author" content="GNLC" />
  </Helmet>
);

const HexTime = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { hours, minutes, seconds, textColor } = state;

  const hexTime = '#' + hours + minutes + seconds;

  const setTime = (value) => {
    value = String(value);
    return value.length < 2 ? '0' + value : value;
  };

  const setColors = () => {
    const now = new Date();

    const hours = setTime(now.getHours());
    const minutes = setTime(now.getMinutes());
    const seconds = setTime(now.getSeconds());

    const textColor =
      hours * 0.299 + minutes * 0.587 + seconds * 0.114 > 186
        ? variables.black
        : variables.white;

    dispatch({
      type: SET_TIME,
      state: {
        hours,
        minutes,
        seconds,
        textColor,
      },
    });
  };

  useEffect(() => {
    let interval = setInterval(() => setColors(), 1000);

    return function cleanup() {
      clearInterval(interval);
    };
  });

  const style = {
    transition: variables.transition,
    color: textColor,
    backgroundColor: hexTime,
  };

  if (!hexTime || !textColor)
    return (
      <div className="hex-time">
        <Head title="HexTime" />
        <Loading />
      </div>
    );

  return (
    <div className="hex-time" style={style}>
      <Head title={hexTime} />
      <span className="hex">{hexTime}</span>
      <a
        style={{ color: textColor }}
        className="repo"
        href={process.env.REACT_APP_GITHUB_URL}
      >
        {process.env.REACT_APP_GITHUB_URL}
      </a>
    </div>
  );
};

export default HexTime;
