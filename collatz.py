# %%
from numpy import random
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd

sns.set_theme(style="darkgrid")
set = pd.read_csv('S:\VSCodeFolder\PYTHON\collatzplot.py\data433.csv')
sns.relplot(x="Operations", y="Data", ci=None, kind="line", data=set)
plt.show()
# %%
