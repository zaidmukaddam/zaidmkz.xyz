import React from "react";
import { NavLink } from "../styles";
import { IconContainer } from "../../shared/icons";
import Link from "next/link";
import { NAV_LINKS } from "../constants";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { SocialLinks } from "../../../common/types";

const MobileNavLinksWrapper = () => (
  <>
    {NAV_LINKS.map((item, idx) => (
      <NavLink key={idx} arial-label={item.title} drawer>
        <Link href={item.to} passHref>
          {item.title}
        </Link>
      </NavLink>
    ))}
    <NavLink drawer>
      <IconContainer
        href={SocialLinks.TWITTER}
        target='_blank'
        rel='noopener noreferrer'
      >
        <FiTwitter aria-label='Twitter @zaidmukaddam' title='Twitter @zaidmukaddam' />
      </IconContainer>
    </NavLink>
    <NavLink drawer>
      <IconContainer
        href={SocialLinks.GITHUB}
        target='_blank'
        rel='noopener noreferrer'
      >
        <FiGithub
          aria-label='GitHub @zaidmukaddam'
          title='GitHub @zaidmukaddam'
        />
      </IconContainer>
    </NavLink>
  </>
);

export default MobileNavLinksWrapper;
