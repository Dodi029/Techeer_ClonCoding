import React from 'react';
import { useState } from 'react';
import MyHeader from './component/MyHeader';

const Home = () => {

    const [curDate, setCurDate] = useState(new Date());             // useState를 통해 날짜를 지정할 수 있는 변수를 만들고, 초기값을 현재 날짜로 지정

    const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;      // 0부터 시작하기 때문에 + 1을 해줌
                                                                                // headText에는 현재 날짜의 년도와 월을 저장

    const increaseMonth = () => {                                           // increaseMonth 함수를 만들고, 이 함수를 MyHeader 컴포넌트의 onClickMonth props로 전달
        setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1), curDate.getDate());         // setCurDate를 통해 curDate를 변경
    }

    const decreaseMonth = () => {                                           // decreaseMonth 함수를 만들고, 이 함수를 MyHeader 컴포넌트의 onClickMonth props로 전달
        setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - 1), curDate.getDate());         // setCurDate를 통해 curDate를 변경
    }

    return (
        <div>
            <MyHeader 
            text={headText}                                        /*} MyHeader 컴포넌트에 headText를 props로 전달 */
            leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}     /* MyHeader 컴포넌트에 MyButton 컴포넌트를 leftChild props로 전달*/
            rightChild={<MyButton text={">"} onClick={increaseMonth} />}    /* MyHeader 컴포넌트에 MyButton 컴포넌트를 rightChild props로 전달*/
            />
        </div>
    );
}

export default Home;                                            // Home 컴포넌트를 내보냄