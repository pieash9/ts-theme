import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import {
  decrement,
  increment,
  incrementByRandom,
} from "../store/slice/counterSlice";

const Home = () => {
  const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="text-center mt-10">
      <h3 className="mb-3 font-semibold text-2xl">{count.value}</h3>

      <button
        onClick={() => dispatch(increment())}
        className="btn btn-warning btn-sm "
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="btn btn-error btn-sm mx-2"
      >
        Decrement
      </button>
      <button
        onClick={() =>
          dispatch(incrementByRandom(Math.floor(Math.random() * 200)))
        }
        className="btn btn-info btn-sm"
      >
        Random Increment
      </button>
    </div>
  );
};

export default Home;
