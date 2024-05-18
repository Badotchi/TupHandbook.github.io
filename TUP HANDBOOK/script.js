document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            searchContent();
        }
    });
});
function searchContent() {
    const input = document.getElementById('searchInput').value.toLowerCase().trim();

    const pageMappings = {
        "dress, dress code, uniform, attire, Dress, Dress Code, Dress code, Uniform, Attire": "dress-code.html",
        "grades, grading, evaluation, assessment,Grading, Evaluation, Assessment": "grading-system.html",
        "rules, policy, regulations, Rules, Policy, Regulations": "rules.html",
        "memos, announcements, updates, Updates, Announcements, Memos,memo,Memo": "memos.html"
    };
    let found = false; 
    Object.keys(pageMappings).forEach(key => {
        let keywords = key.split(", ");
        keywords.some(keyword => {
            if (input.includes(keyword)) {
                window.location.href = pageMappings[key];
                found = true;
                return true; 
            }
            return false;
        });
    });

    if (!found && input !== "") {
        alert('No related page found for the searched words!');
    }
}
