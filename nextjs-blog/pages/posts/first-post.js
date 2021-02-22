
import Link from 'next/link';

function NavLink({ href, name }) {
  // Must add passHref to Link
  return (
    <Link href={href} passHref >
      <a>{name}</a>
    </Link>
  )
}

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <NavLink href="/" name="Back" />
      </h2>
    </>
  )
}
