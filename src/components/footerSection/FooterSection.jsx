/* eslint-disable react/prop-types */
export const FooterSection = ({ links }) => {
  return (
    <>
      <h4>{links.title}</h4>
      <ul>
        {links.content.map((item) => (
          <li key={item.label}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </>
  );
};
