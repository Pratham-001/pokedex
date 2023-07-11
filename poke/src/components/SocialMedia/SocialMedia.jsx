import { ReactComponent as LinkedinLogo } from "../../assets/logo-linkedin.svg";
import { ReactComponent as GithubLogo } from "../../assets/logo-github.svg";

export const SocialMedia = () => {
  return (
    <div className="social-media">
      <a href="https://www.linkedin.com/in/pratham-batra-151a74238/">
        <LinkedinLogo />
      </a>
      <a href="https://github.com/Pratham-001">
        <GithubLogo />
      </a>
    </div>
  );
};
