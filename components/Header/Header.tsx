import {
  HeaderStyled,
  HeaderContent,
  LogoWrapper,
  LogoPartner,
  PartnerImg,
  PartnerTag,
  Logo,
  MenuCheckbox,
  MenuIcon
} from './styled';
import { Navbar } from '../Navbar';

export const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <HeaderContent>
        <LogoWrapper>
          <LogoPartner>
            <PartnerImg src="https://miro.medium.com/max/2880/1*2tmzU7bve-VlTkOMWsk_Hw.jpeg" />
            <PartnerTag>
              <div>Example</div>
              <div>NextJS</div>
            </PartnerTag>
          </LogoPartner>
          <Logo>
            <svg xmlns="http://www.w3.org/2000/svg" width="81" height="16" viewBox="0 0 81 16" fill="none">
              <rect width="81" height="16" fill="#C4C4C4"/>
              <path d="M32.9531 10.3867H35.6484V11H32.1992V5.3125H32.9531V10.3867ZM36.1992 8.84766C36.1992 8.43359 36.2799 8.0612 36.4414 7.73047C36.6055 7.39974 36.832 7.14453 37.1211 6.96484C37.4128 6.78516 37.7448 6.69531 38.1172 6.69531C38.6927 6.69531 39.1576 6.89453 39.5117 7.29297C39.8685 7.69141 40.0469 8.22135 40.0469 8.88281V8.93359C40.0469 9.34505 39.9674 9.71484 39.8086 10.043C39.6523 10.3685 39.4271 10.6224 39.1328 10.8047C38.8411 10.987 38.5052 11.0781 38.125 11.0781C37.5521 11.0781 37.0872 10.8789 36.7305 10.4805C36.3763 10.082 36.1992 9.55469 36.1992 8.89844V8.84766ZM36.9258 8.93359C36.9258 9.40234 37.0339 9.77865 37.25 10.0625C37.4688 10.3464 37.7604 10.4883 38.125 10.4883C38.4922 10.4883 38.7839 10.3451 39 10.0586C39.2161 9.76953 39.3242 9.36589 39.3242 8.84766C39.3242 8.38411 39.2135 8.00911 38.9922 7.72266C38.7734 7.43359 38.4818 7.28906 38.1172 7.28906C37.7604 7.28906 37.4727 7.43099 37.2539 7.71484C37.0352 7.9987 36.9258 8.40495 36.9258 8.93359ZM40.7812 8.85156C40.7812 8.19271 40.9336 7.66927 41.2383 7.28125C41.543 6.89062 41.9466 6.69531 42.4492 6.69531C42.9648 6.69531 43.3672 6.8776 43.6562 7.24219L43.6914 6.77344H44.3516V10.8984C44.3516 11.4453 44.1888 11.8763 43.8633 12.1914C43.5404 12.5065 43.1055 12.6641 42.5586 12.6641C42.2539 12.6641 41.9557 12.599 41.6641 12.4688C41.3724 12.3385 41.1497 12.1602 40.9961 11.9336L41.3711 11.5C41.681 11.8828 42.0599 12.0742 42.5078 12.0742C42.8594 12.0742 43.1328 11.9753 43.3281 11.7773C43.526 11.5794 43.625 11.3008 43.625 10.9414V10.5781C43.3359 10.9115 42.9414 11.0781 42.4414 11.0781C41.9466 11.0781 41.5456 10.8789 41.2383 10.4805C40.9336 10.082 40.7812 9.53906 40.7812 8.85156ZM41.5078 8.93359C41.5078 9.41016 41.6055 9.78516 41.8008 10.0586C41.9961 10.3294 42.2695 10.4648 42.6211 10.4648C43.0768 10.4648 43.4115 10.2578 43.625 9.84375V7.91406C43.4036 7.51042 43.0716 7.30859 42.6289 7.30859C42.2773 7.30859 42.0026 7.44531 41.8047 7.71875C41.6068 7.99219 41.5078 8.39714 41.5078 8.93359ZM45.2539 8.84766C45.2539 8.43359 45.3346 8.0612 45.4961 7.73047C45.6602 7.39974 45.8867 7.14453 46.1758 6.96484C46.4674 6.78516 46.7995 6.69531 47.1719 6.69531C47.7474 6.69531 48.2122 6.89453 48.5664 7.29297C48.9232 7.69141 49.1016 8.22135 49.1016 8.88281V8.93359C49.1016 9.34505 49.0221 9.71484 48.8633 10.043C48.707 10.3685 48.4818 10.6224 48.1875 10.8047C47.8958 10.987 47.5599 11.0781 47.1797 11.0781C46.6068 11.0781 46.1419 10.8789 45.7852 10.4805C45.431 10.082 45.2539 9.55469 45.2539 8.89844V8.84766ZM45.9805 8.93359C45.9805 9.40234 46.0885 9.77865 46.3047 10.0625C46.5234 10.3464 46.8151 10.4883 47.1797 10.4883C47.5469 10.4883 47.8385 10.3451 48.0547 10.0586C48.2708 9.76953 48.3789 9.36589 48.3789 8.84766C48.3789 8.38411 48.2682 8.00911 48.0469 7.72266C47.8281 7.43359 47.5365 7.28906 47.1719 7.28906C46.8151 7.28906 46.5273 7.43099 46.3086 7.71484C46.0898 7.9987 45.9805 8.40495 45.9805 8.93359Z" fill="black"/>
            </svg>
          </Logo>
        </LogoWrapper>
        <MenuCheckbox />
        <MenuIcon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 5H4C3.73478 5 3.48043 5.10536 3.29289 5.29289C3.10536 5.48043 3 5.73478 3 6C3 6.26522 3.10536 6.51957 3.29289 6.70711C3.48043 6.89464 3.73478 7 4 7H20C20.2652 7 20.5196 6.89464 20.7071 6.70711C20.8946 6.51957 21 6.26522 21 6C21 5.73478 20.8946 5.48043 20.7071 5.29289C20.5196 5.10536 20.2652 5 20 5Z" fill="black"/>
            <path d="M20 11H4C3.73478 11 3.48043 11.1054 3.29289 11.2929C3.10536 11.4804 3 11.7348 3 12C3 12.2652 3.10536 12.5196 3.29289 12.7071C3.48043 12.8946 3.73478 13 4 13H20C20.2652 13 20.5196 12.8946 20.7071 12.7071C20.8946 12.5196 21 12.2652 21 12C21 11.7348 20.8946 11.4804 20.7071 11.2929C20.5196 11.1054 20.2652 11 20 11Z" fill="black"/>
            <path d="M20 17H4C3.73478 17 3.48043 17.1054 3.29289 17.2929C3.10536 17.4804 3 17.7348 3 18C3 18.2652 3.10536 18.5196 3.29289 18.7071C3.48043 18.8946 3.73478 19 4 19H20C20.2652 19 20.5196 18.8946 20.7071 18.7071C20.8946 18.5196 21 18.2652 21 18C21 17.7348 20.8946 17.4804 20.7071 17.2929C20.5196 17.1054 20.2652 17 20 17Z" fill="black"/>
          </svg>
        </MenuIcon>
        <Navbar />
      </HeaderContent>
    </HeaderStyled>
  );
};

Header.displayName = 'Header';
