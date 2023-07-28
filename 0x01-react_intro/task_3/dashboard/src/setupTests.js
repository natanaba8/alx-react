import { configure } from "Enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";

configure({ adapter: new Adapter() });