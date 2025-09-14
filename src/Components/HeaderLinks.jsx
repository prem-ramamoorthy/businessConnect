import data from '/src/data/MainPage/HeaderLinks.json';

function HeaderLinks({ onClick = null, classname = "", ismembers = false }) {

  if (ismembers) {
    return <>
      <a
        key={1}
        href={data[0].url}
        className={classname}
        data-text={data[0].name}
        onClick={onClick}
      >
        {data[0].name}
      </a>
    </>
  }

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