export const FreindList = ({friends}) => {
    return (
        <div>
            {friends.map(friend =>(
                <li>
                    <span status={friend.isOnline} ></span>
                    <img class="avatar" src={friend.avatar} alt={friend.name} width="48" />
                    <p className="name">{friend.name}</p>
                </li>
            ))}

        </div>
    )
}