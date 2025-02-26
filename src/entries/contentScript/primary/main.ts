function addDislikeButtons() {
  document.querySelectorAll('.feed-shared-social-action-bar__action-button').forEach(container => {
    // Avoid duplicates - don't add a dislike button if it already exists for this post
    if (!container.parentElement || container.parentElement.querySelector('.dislike-button-container')) return;

    // Create the span wrapper for the button
    const spanWrapper = document.createElement('span');
    spanWrapper.className = 'artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view feed-shared-social-action-bar__action-button feed-shared-social-action-bar--new-padding dislike-button-container';
    spanWrapper.tabIndex = -1;

    // Create the dislike button
    const dislikeBtn = document.createElement('button');
    dislikeBtn.setAttribute('aria-pressed', 'false');
    dislikeBtn.setAttribute('aria-label', 'React Dislike');
    dislikeBtn.className = 'artdeco-button artdeco-button--muted artdeco-button--3 artdeco-button--tertiary ember-view social-actions-button react-button__trigger dislike-button';
    dislikeBtn.style.cursor = 'pointer';

    // Create the span container for button text
    const spanTextContainer = document.createElement('span');
    spanTextContainer.className = 'artdeco-button__text';

    // Create the div inside the button (for proper alignment)
    const divWrapper = document.createElement('div');
    divWrapper.className = 'flex-wrap justify-center artdeco-button__text align-items-center';

    // Create SVG for the dislike button
    // NOTE: LinkedIn already has a thumbs-up SVG, just invert that to turn it into a thumbs down!
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('role', 'none');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('class', 'artdeco-button__icon');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('width', '16');
    svg.setAttribute('height', '16');
    svg.setAttribute('viewBox', '0 0 16 16');
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('data-supported-dps', '16x16');
    svg.setAttribute('data-test-icon', 'thumbs-up-outline-small');
    svg.innerHTML = `<use href="#thumbs-up-outline-small" width="16" height="16"></use>`;
    svg.style.transform = 'scaleY(-1)';

    // Create text inside the button
    const spanText = document.createElement('span');
    spanText.setAttribute('aria-hidden', 'true');
    spanText.className = 'artdeco-button__text react-button__text social-action-button__text';
    spanText.innerText = 'Dislike';

    // Append elements
    divWrapper.appendChild(svg);
    divWrapper.appendChild(spanText);
    spanTextContainer.appendChild(divWrapper);
    dislikeBtn.appendChild(spanTextContainer);
    spanWrapper.appendChild(dislikeBtn);

    // Add click event for dislike button with animation 'shake effect'
    dislikeBtn.addEventListener('click', () => {
      // temporary random rotation between -40 and 40 degrees for shake effect
      const randomRotation = (Math.random() * 80 - 40).toFixed(2);
      svg.style.transform = `scaleY(-1) scale(1.3) rotate(${randomRotation}deg)`;
      setTimeout(() => {
        svg.style.transform = 'scaleY(-1) scale(1) rotate(0deg)';
      }, 150);
    });

    // Insert dislike button after the "Like" button
    const likeContainer = container.parentElement.querySelector('.reactions-react-button');
    likeContainer?.after(spanWrapper);
  });
}

// Run script when DOM loads and every 3 seconds - LinkedIn does lazy loading and new posts might exist after users scroll
window.addEventListener('load', addDislikeButtons, false);
setInterval(addDislikeButtons, 3000);
