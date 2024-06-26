const createCard = ((id, name, price, img, url, className) => {
    const card = document.createElement('div');
    card.className = className;
    card.innerHTML = `
                    <div class="img-container">
                        <img src="${img}" alt="">
                    </div>
                    <div class="info" data-id="${id}">
                        <h3>${name}</h3>
                        <div>
                            <strong>$ ${price}</strong>
                            <svg class="edit-icon" width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="edit_svgrepo.com">
                            <g id="Complete">
                            <g id="edit">
                            <g id="Group">
                            <path id="Vector" d="M50 40.9344V50.9344C50 52.2605 49.4732 53.5323 48.5355 54.47C47.5979 55.4077 46.3261 55.9344 45 55.9344H10C8.67392 55.9344 7.40215 55.4077 6.46447 54.47C5.52678 53.5323 5 52.2605 5 50.9344V15.9344C5 14.6084 5.52678 13.3366 6.46447 12.3989C7.40215 11.4612 8.67392 10.9344 10 10.9344H20" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path id="Vector_2" d="M31.25 40.4344L55 16.4344L44.5 5.93445L20.75 29.6844L20 40.9344L31.25 40.4344Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            </g>
                            </g>
                            </g>
                            </svg>
                            <svg class="trash-icon" width="60" height="60" viewBox="0 0 60 60" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M25 30V42.5" />
                                <path d="M35 30V42.5" />
                                <path d="M10 17.5H50" />
                                <path d="M15 25V45C15 49.1423 18.3579 52.5 22.5 52.5H37.5C41.6423 52.5 45 49.1423 45 45V25" />
                                <path
                                    d="M22.5 12.5C22.5 9.73857 24.7386 7.5 27.5 7.5H32.5C35.2615 7.5 37.5 9.73857 37.5 12.5V17.5H22.5V12.5Z" />
                            </svg>
                        </div>
                    </div>
                    ${url !== '' ? `<button><a href="${url}" target="_blank">Buy</a></button>` : ''}
    `;
    return card;
});

export default createCard;
