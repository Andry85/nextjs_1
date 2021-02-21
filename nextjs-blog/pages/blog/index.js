import Link from 'next/link'

export default function Blog() {
    return (
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog Post</a>
            </Link>
          </li>
        </ul>
      )
}
