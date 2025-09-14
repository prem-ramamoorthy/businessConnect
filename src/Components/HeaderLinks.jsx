import data from '/src/data/MainPage/HeaderLinks.json';

function HeaderLinks({ onClick = null  , classname = "" }) {

  const HeaderComponent = data.map((link, index) => (
    <a
      key={index}
      href={link.url}
      className={classname}
      data-text={link.name}
      onClick={onClick}
    >
      {link.name}
    </a>
  ));

  return <>{HeaderComponent}</>;
}

export default HeaderLinks;