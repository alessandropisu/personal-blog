import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import CustomLink from './Link'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          Made with <CustomLink href="https://nextjs.org">Next.js</CustomLink> and{' '}
          <CustomLink href="https://tailwindcss.com">Tailwind</CustomLink>, deployed on{' '}
          <CustomLink href="https://vercel.com">Vercel</CustomLink>
        </div>
      </div>
    </footer>
  )
}
