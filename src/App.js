import { TimePicker } from "antd";
import dayjs from "dayjs";
import useRoutesCustom from "./routes/useRoutesCustom";

function App() {
  const routes = useRoutesCustom();
  return routes;
}

export default App;
