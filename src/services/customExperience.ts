export const customExperience = {
  getWelcomeMessage: () => {
    const hour = new Date().getHours();
    const dayIndex = new Date().getDay();

    let greeting = "Pronto para dar um tapa no visual?";
    let subtext = "Agende seu horário e venha viver essa experiência.";

    if (hour >= 5 && hour < 12) {
      greeting = "Bom dia, chefe. Café quente pronto por aqui!";
    } else if (hour >= 12 && hour < 18) {
      greeting = "Boa tarde. Pausa para cuidar do estilo?";
    } else {
      greeting = "Boa noite. Resenha e navalha afiadas por aqui.";
    }

    if (dayIndex === 5 || dayIndex === 6) {
      subtext =
        "Fim de semana chegou! Garanta sua cerveja trincando e saia com o visual impecável para o rolê.";
    } else if (dayIndex === 0) {
      subtext =
        "Hoje estamos recarregando as baterias. Mas o nosso agendamento para a semana já está a todo vapor!";
    } else {
      subtext =
        "Dias de semana são ideais para quem busca um atendimento exclusivo, sem pressa e foco total nos detalhes.";
    }

    return { greeting, subtext };
  },
};
