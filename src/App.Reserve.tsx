import React, { useEffect, useState } from "react";

import { Div, H1, Main, Section, Span, Ul, Li, Label, Input, Button } from "@/components/electrons";
import styled from "styled-components";
import "@/styles/styles.scss";

function getAmount(id: number, fromData: any) {
 const filterData = fromData.filter((item: any) => item.parentId === id);
 return filterData.length;
}

const Layout = ({ children }: any) => <Div>{children}</Div>;

/* function Home()     {return (<Layout><Div>Home</Div></Layout>)}
function Todo()     {return (<Layout><Div>Todo</Div></Layout>)}
function Products() {return (<Layout><Div>Products</Div></Layout>)}
function Product()  {return (<Layout><Div>Product</Div></Layout>)}
function Users()    {return (<Layout><Div>Users</Div></Layout>)}
function User()     {return (<Layout><Div>User</Div> </Layout>)}
function Blog()     {return (<Layout><Div>Blog</Div></Layout>)}
function Post()     {return (<Layout><Div>Post</Div></Layout> )} */

function App() {
 const [cat, setCat] = useState([]);
 const [subCat, setSubCat] = useState([]);

 useEffect(() => {
  const retrieve = async function () {
   const response = await fetch("http://localhost:4001/todos");
   if (!response.ok) {
    return;
   }
   const data = await response.json();
   setCat(data?.cat);
   setSubCat(data?.subCat);
   console.log(data);
  };
  retrieve();
 }, []);

 return (
  <Main className="container">
   <Section className="bs-docs-section">
    <Div className="row">
     <Div className="col-md-5">
      {/*  */}

      {/*  */}

      <Ul className="list-group">
       {cat?.map((item: any) => (
        <Li
         key={item.id}
         className="list-group-item d-flex justify-content-between align-items-center"
        >
         <Span>
          <Input type="checkbox" />
          <Span className="mt-3">{item.label}</Span>
         </Span>

         <Div className="align-items-center d-flex">
          <Span className="badge bg-primary rounded-pill">{getAmount(item.id, subCat)}</Span>
          <Button
           className="btn btn-primary"
           type="button"
           data-bs-toggle="offcanvas"
           data-bs-target="#offcanvasExample"
           aria-controls="offcanvasExample"
          >
           <Span style={{ lineHeight: "9px" }}>
            <Div>==</Div>
            <Div>==</Div>
           </Span>
          </Button>
          <Button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
           <Span aria-hidden="true"></Span>
          </Button>
         </Div>
        </Li>
       ))}
      </Ul>

      {/*  */}
      <Div className="input-group mb-3 mt-3">
       <Input
        type="text"
        className="form-control"
        placeholder=""
        aria-label=""
        aria-describedby="button-addon2"
       />
       <Button className="btn btn-primary" type="button" id="button-addon2">
        Button
       </Button>
      </Div>
      {/*  */}
     </Div>
     <Div className="col-md-7">
      <Ul className="list-group">
       {
        // console.log(subCat)
       }
       {/* {subCat?.map((item: any, index: number) => (
        <Li
         key={item.id}
         className="list-group-item d-flex justify-content-between align-items-center"
        >
         {item.label}

         <Span className="badge bg-primary rounded-pill">{item.index}</Span>
        </Li>
       ))} */}
      </Ul>
     </Div>
    </Div>
   </Section>
  </Main>
 );
}

export default App;
