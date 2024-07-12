document.addEventListener('DOMContentLoaded', function() {
    const arrows = document.querySelectorAll('.arrow');

    arrows.forEach(arrow => {
        arrow.addEventListener('click', function(event) {
            event.stopPropagation();

            const dropdown = this.nextElementSibling;
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            } else {
                document.querySelectorAll('.dropdown').forEach(dd => dd.style.display = 'none');
                dropdown.style.display = 'block';
            }
        });
    });
    document.addEventListener('click', function() {
        document.querySelectorAll('.dropdown').forEach(dd => dd.style.display = 'none');
    });
});
