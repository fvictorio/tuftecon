import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv('./data.csv')

data['90/10'] = data['Decile 10 Income'] / data['Decile 1 Income']

def mean_income(df, country):
    country_data = df[df.Country == country]
    plt.plot('Year', 'Mean Income', data=country_data)
    plt.title(f'Mean income for {country}')
    plt.xlabel('year')
    plt.ylabel('mean income')
    plt.savefig(f'{country}_mean_income.png')
    plt.close()

def ninety_ten(df, country):
    country_data = df[df.Country == country]
    plt.plot('Year', '90/10', data=country_data)
    plt.title(f'90/10 for {country}')
    plt.xlabel('year')
    plt.ylabel('90/10')
    plt.savefig(f'{country}_90_10.png')
    plt.close()

countries = data.Country.unique()
def main():
    for country in countries:
        mean_income(data, country)
        ninety_ten(data, country)

if __name__ == '__main__':
    main()
