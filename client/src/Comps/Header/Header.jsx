import "./Header.css";
import React, { useContext } from 'react';
import LanguageContext from "../Context/LanguageContext";

function Header() {
  const { language, setLanguage } = useContext(LanguageContext);
  const handleLanguageChange = (event) => {
    // Handle language change here, you can call setLanguage to update the context value.
    setLanguage(event.target.value);
  };
  return (
    <div className="header">
      <span>
        <a href="https://www.verizon.com/" target="_blank">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAkFBMVEUAAADuAAAAAALuAAIAAwcAAwMBAADOAQYAAgDxAAPfAAIaAQP0AQP4AAT1AAQAAAQ1AwQSAwejAwe0AwUmAwjpAgWXAga+BAhHBAWEBAbGAwXdAgdcBAN0AQbWBAdhAwZRBAU5AwgiBAapBAVXAwZ5AwRvBAiRAQhNAwlBBAUxAgcQBAaLBAenAwcuBQQfAgX46SD3AAADeElEQVR4nO3c21LiQBCA4WQmHTKYBAUDAgKK53V13//t1pX0AMIG72aq/L+rLfamq2vS03MySQAAAAAAAAAAAAAAAAAAAAAAAAAAAIAfzRz9Jw7l5rynlheho4ldNqxS96kaGUZWJ3PZuPSTrc5DBxM5k4zLTa7ScjIIHU3k5LXfDqy0ugodTOyyaWU3uXIzoWJ1y+Z+YF2HjiVyJllUba7cMmNgdTLF0k+Fiyx0NJEzK1+x5hI6mNiZnrPtwJpmeehoIndTpZtkuf5FQcnqNtGpsB7zFXYztzoV2mbNuOomo1Ir1pC+4YS1Vqy0uQ0dS+TM4E4rVnnHuOpWZLUmy14VoaOJnOjejC0nNO/dRBpdFdr70MHErvhda7Jm9FgnZI3VhnQVOpbYmQenS+glFesEmesS2i1CxxK9x9Ja9ma+xcjS9w1TGtJu5rrUitWwKjzBzPxh4VPoWKL3rAudtOF6Q7c8m2jFqof0Dd3Mi9WG1F4yF3Yzd7XVvZnQsYQnl2etP4dTnUl+NTqyHPdmEpn0W83DQU3Ks6GfCkfcm0mKVbW5nubK+evB/651CW25N/OhkPZU3h45lZenuv0KS+7NfMiTx/aQy6a9QbJ/1HzRd22yqhu+wn/8pkJarWQ3WaaYbu/N0DZ8kul2H3TvOxzI3FcsNv025FV32NPqeffopnj0p9D9jDOdDXnSpJST3d8HvdKX/lCxRUfWx29sX9e6QdqwKvRk6LesRr5BMDLzV0h/kyyVm19tg/Dxwa112pNnrfupJVdbhYzaxFj3pkNL/IWsigtZe178Dp/LD386XAb9aLLd4ht/brQbufO/vNG878lu9GjQtgXq3Wodc++Bg4uPTn3teZeMfe814rrtF2alG1e2+VfO//iu3r2Qq6+y3u77CaNNvS0n5OqrXBbl9gGF2T6Wq+/pGw4Y2b75Wkm7N2NtORuwhD5k/OZV2hvMdfe0XvEVHuM/vY9eSysWj+WOy82TtqGpnxnrhfCm6Yg8OfNHOf4Qei4JyTrOHxKqigtZ/2Perb45aZuI/lnomKKVm7d6L1nVmFeY/3frdpNlm8vQAcXMX8baLKGHVKwO8lxuZ0LLY7lO+WDmP0TrRvRYXfLiXv8eQercVUGyOuSJTPyfE3vjTOf7CvZmAAAAAAAAAAAAAAAAAAAAAAAAAAAA8LP8BePsI6zelW5+AAAAAElFTkSuQmCC" alt="Image Description"/>
        </a>
      </span>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
}

export default Header;
