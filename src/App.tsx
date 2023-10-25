import "@/styles/styles.scss";
import { ReactNode, memo, useEffect, useState, FC, Component } from "react";

import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
	Link,
	Navigate,
	useParams,
	useLocation,
} from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import {
	Provider,
	connect,
	useSelector,
	shallowEqual,
	useDispatch,
} from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

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

import styled, { createGlobalStyle, keyframes, css } from "styled-components";

import vars from "@/styles/abstracts/_variables";

const GlobalStyle = createGlobalStyle`${css`
	html,
	body,
	#root {
		text-decoration: none;
	}
	:root {
		--color--black-100: rgb(0, 0, 0);
	}
`}`;

interface Imixin {
	wh: (width: string, height: string) => any;
}

export const mixins: Imixin = {
	wh: (width, height) => {
		return css`
			width: ${width};
			height: ${height ?? width};
		`;
	},
};

const Container = styled.section`
	text-decoration: none;
	border: solid var(--color--black-100) 10px;
`;

function Menu() {
	return (
		<Div>
			<Nav className="nav">
				{/* <Ul className="__ul">{selectedData && selectedData?.data?.map((item: any) => item.label)}</Ul> */}
			</Nav>
		</Div>
	);
}

export interface ILayout1Props {
	children?: any;
}
export interface ILayout2Props {
	children?: any;
}
export interface ILayouts {
	children?: any;
}

export function Layouts({ children }: ILayouts) {
	return <Container>{children}</Container>;
}

const Home = () => <Div>Home</Div>;
const Todo = () => <Div>Todo</Div>;
const Products = () => <Div>Products</Div>;
const Product = () => <Div>Product</Div>;
const Users = () => <Div>Users</Div>;
const User = () => <Div>User</Div>;
const Blog = () => <Div>Blog</Div>;
const Post = () => <Div>Post</Div>;

function App() {
	return (
		<>
			<GlobalStyle />
			<Router>
				<Layouts>
					<Routes>
						<Route path={`/`} element={<Navigate replace to="/todo" />} />
						<Route path={`/home`} element={<Navigate replace to="/todo" />} />

						<Route path={`/todo`}>
							<Route index element={<Todo />} />
							<Route path={`:slug`} element={<Todo />} />
						</Route>

						<Route path={`/products`} element={<Products />} />
						<Route path={`/product`}>
							<Route index element={<Product />} />
							<Route path={`:slug`} element={<Product />} />
						</Route>

						<Route path={`/users`} element={<Users />} />
						<Route path={`/user`}>
							<Route index element={<User />} />
							<Route path={`:slug`} element={<User />} />
						</Route>

						<Route path={`/blog`}>
							<Route index element={<Blog />} />
							<Route path={`:slug`} element={<Post />} />
						</Route>
					</Routes>
				</Layouts>
			</Router>
		</>
	);
}

export default App;
