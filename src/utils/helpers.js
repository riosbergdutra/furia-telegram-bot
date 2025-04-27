function escapeMarkdown(text) {
  return text.replace(/([_*\[\]()~`>#+\-=|{}.!-])/g, '\\$1');
}

function formatDate(date) {
  return date.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

module.exports = {
  escapeMarkdown,
  formatDate
};