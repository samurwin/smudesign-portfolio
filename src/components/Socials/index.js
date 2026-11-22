
export default function Socials({socialLinks}) {

  return(
    <>
      {socialLinks.map(social => (
        <a 
        className="svg text-secondary pb-3"
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        key={social.key}
        >
            {social.icon}
        </a>
      ))}
      
    </>
  )
}