export default function Layout({ children }) {
  return (
    <div>
      <header>Header of the site - add navigation here</header>
      <main>{children}</main>
      <footer>Footer of your site</footer>
    </div>
  )
}