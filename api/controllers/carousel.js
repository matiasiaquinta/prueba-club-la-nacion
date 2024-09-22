import fs from 'fs';

// Leer JSON
const readJSON = () => {
  const data = fs.readFileSync('./api/data/accounts.json', 'utf-8');
  return JSON.parse(data);
};

export const getDataWithTag = async (req, res) => {
  try {
    const json = readJSON();
    const accounts = json.accounts;

    const filteredByTag = accounts.filter((account) => {
      return account.tags.some((tag) => tag.name === 'Turismo en Buenos Aires');
    });

    const accountsWithTag = filteredByTag.map((account) => {
      const sortedBranches = account.branches.sort(
        (a, b) => a.location - b.location
      );

      let maxBlack = '0';
      let maxPremium = '0';
      let maxClassic = '0';

      const benefits = account.benefits;

      benefits.map((benefit) => {
        benefit.program_name.map((program) => {
          const discount = parseFloat(benefit.type);

          // BLACK
          if (program.includes('Black')) {
            if (discount > maxBlack) {
              maxBlack = benefit.type;
            }
          }

          // PREMIUM
          if (program.includes('Premium')) {
            if (discount > maxPremium) {
              maxPremium = benefit.type;
            }
          }

          // CLASSIC
          if (program.includes('Classic')) {
            if (discount > maxClassic) {
              maxClassic = benefit.type;
            }
          }
        });
      });

      return {
        id: account.id,
        name: account.name,
        image: account.images[0].url,
        accountUrl: `https://club.lanacion.com.ar/${account.crmid}`,
        maxBlack: maxBlack,
        maxPremium: maxPremium,
        maxClassic: maxClassic,
        nearestLocation: sortedBranches[0].location,
      };
    });

    const firstFourValues = accountsWithTag.slice(0, 4);
    res.status(200).json(firstFourValues);
  } catch (error) {
    console.error('Error al procesar la solicitud de voucher:', error);
    res.status(500).json({ message: 'Error al procesar el archivo JSON' });
  }
};

export const getDataWithVoucher = async (req, res) => {
  try {
    const json = readJSON();
    const accounts = json.accounts;

    const filteredByFlag = accounts.filter((account) => {
      return account.haveVoucher;
    });

    const sortedVoucherAccounts = filteredByFlag.sort((a, b) =>
      b.name.localeCompare(a.name)
    );

    const accountsWithVoucher = sortedVoucherAccounts.map((account) => {
      return {
        id: account.id,
        name: account.name,
        image: account.images[0].url,
        accountUrl: `https://club.lanacion.com.ar/${account.crmid}`,
      };
    });

    const firstFourValues = accountsWithVoucher.slice(0, 4);
    res.status(200).json(firstFourValues);
  } catch (error) {
    res.status(500).json({ message: 'Error al procesar el archivo JSON' });
  }
};
