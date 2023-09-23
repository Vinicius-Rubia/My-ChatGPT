
interface CodePreviewProps {
  code: string;
}

export const CodePreview: React.FC<CodePreviewProps> = ({ code }) => {
  return (
    <div
      id="shiki-code"
      dangerouslySetInnerHTML={{ __html: code }}
    />
  )
}