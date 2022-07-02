export function Post({ author, content}) {
  return (
    <>
      <p><strong>{author}</strong></p>
      <p>{content}</p>
    </>
  )
}