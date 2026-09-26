import { useEffect, useReducer } from 'react';

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

const setTime = (value: number) => {
  const time = String(value);
  return time.length < 2 ? `0${time}` : time;
};

const Head = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

const HexTime = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { hours, minutes, seconds, textColor } = state;

  const hexTime = `#${hours}${minutes}${seconds}`;

  const setColors = () => {
    const now = new Date();

    const hours = setTime(now.getHours());
    const minutes = setTime(now.getMinutes());
    const seconds = setTime(now.getSeconds());

    const textColor =
      Number(hours) * 0.299 +
        Number(minutes) * 0.587 +
        Number(seconds) * 0.114 >
      186
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
    setColors();

    const interval = setInterval(() => setColors(), 1000);

    return function cleanup() {
      clearInterval(interval);
    };
  }, []);

  const style = {
    transition: variables.transition,
    color: textColor ?? undefined,
    backgroundColor: textColor ? hexTime : undefined,
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
        href={import.meta.env.VITE_GITHUB_URL}
      >
        {import.meta.env.VITE_GITHUB_URL}
      </a>
    </div>
  );
};

export default HexTime;
