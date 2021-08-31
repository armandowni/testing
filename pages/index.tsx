import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { CSSProperties, useState } from 'react'

function NavBar({ title, titleColor }) {
  return (<div style={{ ...styles.navbar, background: titleColor }}>{title}</div>);
}

function SideBar({ children }) {
  return (<div style={styles.sidebar}>
    <h3>Main Menu</h3>
    {children}
  </div>)
}

export default function Home({ title, titleColor, showNavbar }) {
  let navbar = null;
  let data = [1, 2, 3, 4, 5]

  const [name,setname] = useState("Armando") 

  if (showNavbar) navbar = <NavBar title={title} titleColor={titleColor}></NavBar>

  let items = []

  for (let temp of data) {
    items.push(<li>Data {temp}</li>)
  }

  return (<div style={styles.container}>
    {navbar}
    <div style={styles.layout}>
      <SideBar>
        <div><a href="#">Menu 1</a></div>
        <div><a href="#">Menu 2</a></div>
        <div><a href="#">Menu 3</a></div>
      </SideBar>
      <div style={styles.contentLayout}>
        <div style={styles.content}>
          <ul>{items}</ul>
        </div>
        <div style={styles.footer}>footer</div>
      </div>
    </div>

  </div>);
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    width: "50%",
    height: "100vh",
    margin: "auto",
    marginTop: "10em",
    border: "1px solid #cc"
  },
  navbar: {
    width: "100%",
    background: "green",
    fontWeight: "bold",
    padding: "0.5em 2em",
  },
  layout: {
    width: "100%",
    display: "flex",
  },
  sidebar: {
    width: "100%",
    height: "500px",
    background: "cyan",
  },
  contentLayout: {
    width: "70%",
    height: "100%",
  },
  content: {
    width: "100%",
    height: "450px",
    background: "orange",
  },
  footer: {
    background: "black",
    height: "50px",
    color: "white"
  },
}
