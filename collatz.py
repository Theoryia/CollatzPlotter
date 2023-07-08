# %%
from numpy import random
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd

sns.set_theme(style="darkgrid")
set = pd.read_csv('.csv') #change location based on csv
sns.relplot(x="Operations", y="Data", ci=None, kind="line", data=set)
plt.show()
# %%
