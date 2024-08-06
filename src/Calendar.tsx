import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import starImg from "./assets/star.png";
import moment from "moment";

// TODO : 자신이 직관을 보러간 경기(등록 한 경기)를 캘린더에 표시 하고
// 클릭 시 그날 직관 정보(이미지, 한 줄 코멘트 등)

// 경기 등록 날짜
const DUMMY_DATA = [
  {
    date: new Date(2024, 0, 1),
    game: "경기1",
    comment: "코멘트1",
  },
  {
    date: new Date(2024, 0, 2),
    game: "경기2",
    comment: "코멘트2",
  },
  {
    date: new Date(2024, 0, 3),
    game: "경기3",
    comment: "코멘트3",
  },
  {
    date: new Date(2024, 0, 4),
    game: "경기4",
    comment: "코멘트4",
  },
  {
    date: new Date(2024, 0, 5),
    game: "경기5",
    comment: "코멘트5",
  },
  {
    date: new Date(2024, 0, 6),
    game: "경기6",
    comment: "코멘트6",
  },
  {
    date: new Date(2024, 0, 7),
    game: "경기7",
    comment: "코멘트7",
  },
  {
    date: new Date(2024, 0, 8),
    game: "경기8",
    comment: "코멘트8",
  },
  {
    date: new Date(2024, 0, 9),
    game: "경기9",
    comment: "코멘트9",
  },
  {
    date: new Date(2024, 0, 10),
    game: "경기10",
    comment: "코멘트10",
  },
  {
    date: new Date(2024, 0, 11),
    game: "경기11",
    comment: "코멘트11",
  },
  {
    date: new Date(2024, 0, 12),
    game: "경기12",
    comment: "코멘트12",
  },
  {
    date: new Date(2024, 0, 13),
    game: "경기13",
    comment: "코멘트13",
  },
];
function CalendarContainer() {
  const [value, setValue] = useState(new Date()); // 초기값은 현재 날짜

  // 특정 날짜 표시 함수
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const titleContent = ({ date, view }: any) => {
    // DUMMY_DATA에서 date와 같은 날짜를 찾아서 game을 반환
    const findGame = DUMMY_DATA.find((game) => {
      // toLocaleDateString() : 날짜를 문자열로 변환해서 같은 날짜만 반환
      return game.date.toLocaleDateString() === date.toLocaleDateString();
    });

    // view는 현재 달력의 뷰를 나타냄
    return findGame && view === "month" ? (
      <div className="img">
        <img src={starImg} />
      </div>
    ) : null;
  };

  return (
    <CalendarWrapper>
      <CalendarStyle
        locale="ko-KR"
        onChange={(newValue) => setValue(newValue as Date)}
        value={value}
        minDate={new Date(2024, 0, 1)} // 달력의 최소 날짜
        maxDate={new Date(2024, 11, 31)} // 달력의 최대 날짜
        showNeighboringMonth={false} // 이월 날짜 보이기
        tileContent={titleContent}
        formatDay={(_, date) => moment(date).format("D")}
        formatYear={(_, date) => moment(date).format("YYYY")} // 네비게이션 눌렀을때 숫자 년도만 보이게
        formatMonthYear={(_, date) => moment(date).format("M월")} // 네비게이션에서 2023. 12 이렇게 보이도록 설정
      />
    </CalendarWrapper>
  );
}

const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const CalendarStyle = styled(Calendar)`
  width: 315px;
  height: 386px;
  .react-calendar__tile {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 51px;
    height: 51px;
    padding: 0;
    abbr {
    }
  }
  .img {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0;
    pointer-events: none;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default CalendarContainer;
