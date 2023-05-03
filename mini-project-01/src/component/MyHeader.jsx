import React from 'react';
import { useState } from 'react';
import MyHeader from './component/MyHeader';

const Home = () => {

    const [curDate, setCurDate] = useState(new Date());             // useState를 통해 날짜를 지정할 수 있는 변수를 만들고, 초기값을 현재 날짜로 지정

    const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;      // 0부터 시작하기 때문에 + 1을 해줌
                                                                                // headText에는 현재 날짜의 년도와 월을 저장
    return (
        <div>
            <MyHeader text={headText} />                                        {/* MyHeader 컴포넌트에 headText를 props로 전달*/}
        </div>
    );
}

export default Home;