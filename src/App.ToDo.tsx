import "@/styles/styles.scss";

import React, { ReactNode, useEffect, useState, FC } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
// import { menuReducer, menuReadAllDispatch }          from "./redux/menu/reducer";
import {
 Div,
 H1,
 Main,
 Section,
 Span,
 Ul,
 Li,
 Label,
 Input,
 Aside,
 Button,
 Table,
 Tbody,
 Tfoot,
 Thead,
 Tr,
 Td,
 Br,
 Img,
 Nav,
 Small,
 I,
 H2,
} from "@/components/electrons";

// const rootReducer = combineReducers({ menu: menuReducer });

// const store = createStore(rootReducer, applyMiddleware(...[logger, thunk]));

interface LayoutProps {
 children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
 useEffect(() => {}, []);

 return (
  <Div>
   <Section className="container">
    <Div className="row">
     <Div className="col-12">
      <Nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
       <Div className="container-fluid">
        <Div className="navbar-collapse" id="navbarColor01">
         <Ul className="navbar-nav me-auto">
          <Li className="nav-item">
           <NavLink className="nav-link" to="/">
            Home
           </NavLink>
          </Li>
          <Li className="nav-item">
           <NavLink className="nav-link" to="/todo">
            ToDo
           </NavLink>
          </Li>
          <Li className="nav-item">
           <NavLink className="nav-link" to="/blog">
            Blog
           </NavLink>
          </Li>
          <Li className="nav-item">
           <NavLink className="nav-link" to="/users">
            Users
           </NavLink>
          </Li>
         </Ul>
        </Div>
       </Div>
      </Nav>

      {children}
     </Div>
    </Div>
   </Section>
  </Div>
 );
};

const Home = () => <Layout></Layout>;

const Blog = () => (
 <Layout>
  <Div>Blog</Div>
 </Layout>
);

const ToDo = () => (
 <Layout>
  <Div className="bs-docs-section">
   <Div className="row">
    <Div className="col-5">
     <H2>ToDo Categories</H2>

     <Ul className="list-group">
      <Li className="list-group-item d-flex justify-content-between align-items-center">
       <Div className="form-check">
        <Input className="form-check-input" type="checkbox" defaultValue="" />
       </Div>
      </Li>
     </Ul>

     <Div className="bs-component">
      <Ul className="list-group">
       <Li className="list-group-item d-flex justify-content-between align-items-center">
        <Div className="form-check">
         <Input className="form-check-input" type="checkbox" defaultValue="" />
         <NavLink to="/todo/1">Home Work</NavLink>
        </Div>
        <Div className="bs-component bs-component--nested-margin bs-component--scale">
         <Span className="badge bg-primary rounded-pill">14</Span>
         <Button className="btn btn-primary" type="button" children="Edit" />
         <Button className="btn btn-primary" type="button" children="Drag" />
         <Button className="btn btn-danger" type="button" children="Delete" />
        </Div>
       </Li>

       <Li className="list-group-item d-flex justify-content-between align-items-center">
        <Div className="form-check">
         <Input className="form-check-input" type="checkbox" defaultValue="" />
         <NavLink to="/todo/2">Shopping</NavLink>
        </Div>
        <Span className="badge bg-primary rounded-pill">14</Span>
       </Li>

       <Li className="list-group-item d-flex justify-content-between align-items-center">
        <Div className="form-check">
         <Input className="form-check-input" type="checkbox" defaultValue="" />
         <NavLink to="/todo/3">Coding</NavLink>
        </Div>
        <Span className="badge bg-primary rounded-pill">14</Span>
       </Li>
      </Ul>
     </Div>

     <Div className="bs-component">
      <ul className="pagination pagination-sm">
       <li className="page-item disabled">
        <a className="page-link" href="#">
         «
        </a>
       </li>
       <li className="page-item active">
        <a className="page-link" href="#">
         1
        </a>
       </li>
       <li className="page-item">
        <a className="page-link" href="#">
         2
        </a>
       </li>
       <li className="page-item">
        <a className="page-link" href="#">
         3
        </a>
       </li>
       <li className="page-item">
        <a className="page-link" href="#">
         4
        </a>
       </li>
       <li className="page-item">
        <a className="page-link" href="#">
         5
        </a>
       </li>
       <li className="page-item">
        <a className="page-link" href="#">
         »
        </a>
       </li>
      </ul>
     </Div>

     <Div className="bs-component">
      <Div className="input-group mb-3">
       <Input type="text" className="form-control" placeholder="" />
       <Button className="btn btn-primary" type="button" id="button-addon2">
        Add
       </Button>
      </Div>
     </Div>
    </Div>
    <Div className="col-7">
     <H2>ToDo List</H2>
     <Div className="bs-component">
      <Ul className="list-group">
       <Li className="list-group-item d-flex justify-content-between align-items-center">
        Cras justo odio
        <Span className="badge bg-primary rounded-pill">14</Span>
       </Li>
       <Li className="list-group-item d-flex justify-content-between align-items-center">
        Dapibus ac facilisis in
        <Span className="badge bg-primary rounded-pill">2</Span>
       </Li>
       <Li className="list-group-item d-flex justify-content-between align-items-center">
        Morbi leo risus
        <Span className="badge bg-primary rounded-pill">1</Span>
       </Li>
      </Ul>
     </Div>

     <Div className="bs-component">
      <Div className="input-group mb-3">
       <Input type="text" className="form-control" placeholder="" />
       <Button className="btn btn-primary" type="button" id="button-addon2">
        Add
       </Button>
      </Div>
     </Div>
    </Div>
   </Div>
  </Div>
 </Layout>
);

const Users = () => (
 <Layout>
  <Div>Users</Div>
 </Layout>
);

function App() {
 // prettier-ignore
 return (
  // <Provider store={store}>
  <Router>
   <Routes>
    <Route path="/"           element={<Home />} />

    <Route path="/todo"       element={<ToDo />}>
     <Route path=":id"        element={<ToDo />} />
    </Route>

    <Route path="/blog"       element={<Blog />} />
    <Route path="/users"      element={<Users />} />
   </Routes>
  </Router>
  // </Provider>

 );
}

export default App;
