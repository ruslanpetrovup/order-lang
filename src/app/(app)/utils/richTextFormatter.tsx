import Link from 'next/link'
import React from 'react'

interface TextNode {
  type: string
  text?: string
  children?: TextNode[]
  fields?: {
    url?: string
    newTab?: boolean
  }
}

export interface RichTextNode {
  root: TextNode
}

export const formatRichText = (content: RichTextNode, params?: { maxWidth?: number }) => {
  const renderNode = (node: TextNode): React.ReactNode => {
    if (!node) return null

    switch (node.type) {
      case 'text':
        return node.text

      case 'link':
        return (
          <Link
            href={node.fields?.url || '#'}
            className="text-white underline mx-1"
            target={node.fields?.newTab ? '_blank' : '_self'}
            rel={node.fields?.newTab ? 'noopener noreferrer' : ''}
          >
            {node.children?.map((child, index) => (
              <React.Fragment key={index}>{renderNode(child)}</React.Fragment>
            ))}
          </Link>
        )

      case 'paragraph':
        return (
          <p
            className={`text-white leading-relaxed`}
            style={{ maxWidth: `${params?.maxWidth || 383}px` }}
          >
            {node.children?.map((child, index) => (
              <React.Fragment key={index}>{renderNode(child)}</React.Fragment>
            ))}
          </p>
        )

      case 'root':
        return (
          <>
            {node.children?.map((child, index) => (
              <React.Fragment key={index}>{renderNode(child)}</React.Fragment>
            ))}
          </>
        )

      default:
        return null
    }
  }

  return renderNode(content.root)
}
