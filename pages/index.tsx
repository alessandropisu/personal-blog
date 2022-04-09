import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import aboutData from '@/data/aboutData'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-slate-800">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Who I am 🤷‍♂️
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <Image
              src={aboutData.avatar}
              alt="avatar"
              width="200px"
              height="200px"
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">{siteMetadata.occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{siteMetadata.company}</div>
            <div className="flex space-x-5 pt-6">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            {aboutData.description}

            {aboutData.list.map((element) => (
              <div key={element.title}>
                <p className="text-2xl font-bold">{element.title}</p>

                <div className="inline-flex	 flex-wrap">
                  {element.badges.map((badge) => (
                    <img key={badge} src={badge} alt="badge" className="m-0" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
