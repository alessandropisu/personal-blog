interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <p className="mr-3 text-sm font-medium uppercase text-primary-500">
      {text.split(' ').join('-')}
    </p>
  )
}

export default Tag
