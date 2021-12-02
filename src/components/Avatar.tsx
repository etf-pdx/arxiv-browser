import * as React from 'react';

interface AvatarProps {
  seed: string
}

const Avatar = (props: AvatarProps) => {
  return (
    <div className="avatar">
      <img src={`https://avatars.dicebear.com/api/avataaars/${props.seed}.svg`} width="100px" height="100px" />
    </div>
  );
}
export default Avatar;