import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
// https://www.framer.com/docs/motionvalue/##usetransform
// import { useEffect } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0); // 리엑트의 state아님 리렌더는 일어나지 않음
  // 감지할 값, x가 -800 0 800 일때, output은 2 1 0.1
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  // react native에선 interpolation 이라고 한다
  // useEffect(() => {
  //   x.onChange(() => console.log(x.get()));
  // scale.onChange(() => console.log(scale.get()));
  // }, [x]);
  return (
    <Wrapper>
      {/* 수동으로 값 주기 */}
      {/* <button onClick={() => x.set(200)}>click me</button> */}
      <Box
        style={{ x, scale }} // 선언한 x와 연결 MotionValue기 업데이트 된다
        drag="x" // 수평 드래그
        dragSnapToOrigin
      />
    </Wrapper>
  );
}
export default App;
