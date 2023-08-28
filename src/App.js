/*import HeaderNav from "./Components/HeaderNav";*/
import HeaderBootstrap from "./Components/HeaderBootstrap";
import Filter from "./Components/Filter";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import Products from "./Components/Products";
import Stats from "./Components/Stats";
import Hooksuse from "./Components/Hooks1";
import HooksIntro from "./Components/HooksIntro";
import CalculaterState from "./Components/CalculaterState";
import { Routes, Route } from "react-router-dom";
import FormValidation from "./Components/FormValidation";
import Effect from "./Components/Effect";

import Paremt from "./Components/useContext/Paremt";
import Reducer from "./Components/useReducer/Reducer";
import Ref from "./Components/useRef/Ref";
import Memo from "./Components/useMemo/Memo";
import Callback from "./Components/useCallback/Callback";
import UsersPrint from "./Components/UsersPrint";
import Create from "./Components/CRUD/Create";
import Read from "./Components/CRUD/Read";
import Update from "./Components/CRUD/Update";
function App() {
  return (
    <div className="App">
      <HeaderBootstrap />
      {/*<HeaderNav/><Filter/> <Products/>*/}

      <Routes>
        <Route path="/" element={<Home title="Hi this is from Home" />} />
        <Route
          path="/products"
          element={<Products cost="1000" color="red" />}
        />
        {/*<Route path="profile" element={<Profile />} />
          <Route path="account" element={<Account />} />*/}
        <Route path="/filter" element={<Filter />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/hooksuse" element={<Hooksuse />} />
        <Route path="/hooksintro" element={<HooksIntro />} />
        <Route path="/calculaterstate" element={<CalculaterState />} />
        <Route path="/form" element={<FormValidation />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/parent" element={<Paremt />} />
        <Route path="/reducer" element={<Reducer />} />
        <Route path="/ref" element={<Ref />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/back" element={<Callback />} />
        <Route path="/users" element={<UsersPrint />} />

        {/* CRUD ROUTES STARTS HERE */}
        <Route path="/create" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/update" element={<Update />} />

        {/* CRUD ROUTES STARTS HERE */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
