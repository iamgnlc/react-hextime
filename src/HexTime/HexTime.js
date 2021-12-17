import React, { useReducer, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';

import Loading from '../Loading';
import { SET_TIME } from '../actions';
import { reducer } from '../reducer';

import './HexTime.scss';

const initialState = {
  hours: null,
  minutes: null,
  seconds: null,
  textColor: null,
};

const HexTime = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const intervalRef = useRef(null);

  const { hours, minutes, seconds, textColor } = state;

  const hexTime = '#' + hours + minutes + seconds;

  const setTime = (value) => {
    value = String(value);
    return value.length < 2 ? '0' + value : value;
  };

  const setColors = () => {
    var now = new Date();

    let hours = setTime(now.getHours());
    let minutes = setTime(now.getMinutes());
    let seconds = setTime(now.getSeconds());

    let textColor =
      hours * 0.299 + minutes * 0.587 + seconds * 0.114 > 186 ? '#000' : '#fff';

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
    let interval = intervalRef.current;
    interval = setInterval(() => setColors(), 1000);

    return function cleanup() {
      clearInterval(interval);
    };
  });

  const style = {
    transition: 'all 1s',
    color: textColor,
    backgroundColor: hexTime,
  };

  if (!hexTime || !textColor)
    return (
      <div className="hex-time">
        <Loading />
      </div>
    );

  return (
    <div className="hex-time" style={style}>
      <Helmet>
        <title>{hexTime}</title>
      </Helmet>
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
