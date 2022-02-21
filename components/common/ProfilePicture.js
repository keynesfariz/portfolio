import Image from "next/image";

export default function ProfilePicture() {
  return (
    <Image
      layout="fill"
      objectFit="cover"
      src={`https://www.gravatar.com/avatar/${process.env.NEXT_PUBLIC_PROFILE_PICTURE_MD5}`}
      alt="Fariz Muhammad"
    />
  );
}
